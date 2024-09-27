const SERVER_URL = "http://localhost:5173/api/";
LOGIN_URL = `${SERVER_URL}auth/login`;

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", login);

function login(e){
      e.stopPropagation();
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const error = document.getElementById("error");
      const data = {email: email, password: password};
      console.log(data)
      try{
            fetch(LOGIN_URL, {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
            }).then(res => res.json()).then(response => {
                  console.log(response['status'])
                  if(response['status'] === 200){
                        console.log(response['data']['token'])
                        sessionStorage.setItem("token", JSON.stringify(response['data']['token']));
                        window.location.href = "/dashboard";
                  }else{
                        error.innerHTML = response['message'];
                  }
            }).catch(err => {
                  error.innerHTML = "An error occurred";
            })
      }catch(error){
            error.innerHTML = error.message;
      }
}