import axios from "axios";

const url =  "https://codestore.onrender.com/api/";

const userDTO = {
  name: "John",
  email: "john@mail.com",
  password: "johnny"
}

const noteDTO = {
  text: "Test Note",
  title: "First Test Note",
  language: "java"
};

var token;
var noteID;
describe('Tests', () => {

  test('RegisterUser Test', async () => {
    const existsMessage = 'User already exists';
    await axios.post(url + "users/",userDTO)
    .then((res) => expect(res.status).toBe(201))
    .catch((err) => {
      if (err.response) {
        expect(err.response.data.message).toBe(existsMessage);
      }
    });
  });

  test('LoginUser Test', async () => {
    var status;
    await axios.post(url + "users/login",{email:userDTO.email,password: userDTO.password})
    .then((res) => {
      status = res.status;
      token = res.data.token;
    })
    .catch((err) => {
      if(err.response) {
        status = err.response.status;
      }
    });
    expect(status).toBe(201);
  });


  
  test('SetNote Test', async () => {
    var status;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    await axios.post(url + "notes",noteDTO,config)
    .then((res) => {
      status = res.status;
      noteID = res.data._id;
    })
    .catch((err) => {
      if(err.response) {
        status = err.response.status;
      }
    });
    expect(status).toBe(200);
  });

  test('GetNotes Test', async () => {
    var status;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    await axios.get(url + "notes",config).
    then((res) => (status = res.status))
    .catch((err) => {
      if(err.response) {
        status = err.response.status;
      }
    });
    expect(status).toBe(200);
  });

  test('UpdateNote Test', async () => {
    var status;
    var expectedDTO = {
      text:"Updated Note",
      title: "New Updated Note",
      language: "python"

    };
    var data;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    
    await axios.put(`${url}notes/${noteID}`,{text:"Updated Note", title: "New Updated Note", language: "python"},config)
    .then((res) => {
      status = res.status; 
      data = {
        text: res.data.text,
        title: res.data.title,
        language: res.data.language
      }
    })
    .catch((err) => {
      if(err.response) {
        status = err.response.status;
      }
    });
    expect(expectedDTO).toStrictEqual(data);
    expect(status).toBe(200);
  });

  test('DeleteNote test', async () => {
    var status;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    await axios.delete(`${url}notes/${noteID}`,config)
    .then((res) => {status = res.status})
    .catch((err) => {
      if(err.response) {
        status = err.response.status;
      }
    });
    expect(status).toBe(200);
  });

});


