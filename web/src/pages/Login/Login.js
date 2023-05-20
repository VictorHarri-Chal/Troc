import React, { useState } from "react";
import * as Comp from "./style";

const Login = () => {
  const [signIn, setSignIn] = React.useState(true);

  const [usernameSignUp, setUsernameSignUp] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [passwordConfirmSignUp, setPasswordConfirmSignUp] = useState("");

  const [usernameSignIn, setUsernameSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

  const img = require("../../images/marais_salants.jpg");

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();
    try {
      await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usernameSignUp,
          emailSignUp,
          passwordSignUp,
          passwordConfirmSignUp,
        }),
      })
        .then((response) => {
          if (response.ok) {
            alert("User created successfully!");
            setSignIn(true);
            return response.json();
          }
          console.log(
            "error on submit " + response.statusText + "  code: " + response
          );
          throw new Error("Something went wrong" + response.statusText);
        })
        .catch((error) => {
          console.log(error);
          return;
        });
    } catch (error) {
      alert("Couldn't create user. Please try again. " + error);
    }
  };

  // const handleSubmitSignIn = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await fetch("http://localhost:8080/api/auth/signin", {
  //       method: "POST",
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ usernameSignIn, passwordSignIn }),
  //     })
  //       .then((response) => response.json())
  //       .then((user) => {
  //         if (user) {
  //           document.cookie = "jwtToken=" + user.jwtToken;
  //           fetch("http://localhost:8080/dashboard", {
  //             method: "GET",
  //             headers: {
  //               "x-access-token": cookies.getCookie("jwtToken"),
  //             },
  //           })
  //             .then(function (responseGet) {
  //               if (responseGet.status === 200) {
  //                 window.location.href = "http://localhost:8081/dashboard";
  //               } else {
  //                 console.log("response: " + responseGet);
  //                 console.log("Code: " + responseGet.status);
  //               }
  //             })
  //             .catch((e) => {
  //               console.log(e);
  //               return;
  //             });
  //         } else {
  //           console.log("error on submit ");
  //           throw new Error("Something went wrong");
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         return;
  //       });
  //   } catch (error) {
  //     alert("Couldn't log in. Please try again. " + error);
  //   }
  // };

  return (
    <Comp.ImgWrap>
      <Comp.Img src={img} alt="Marais salants" />
      <Comp.LoginContainer>
        <Comp.SignUpContainer signIn={signIn}>
          <Comp.Form>
            <Comp.Title>Créer un compte</Comp.Title>

            <Comp.Input
              type="text"
              placeholder="Nom d'utilisateur"
              value={usernameSignUp}
              onChange={(e) => setUsernameSignUp(e.target.value)}
            />
            <Comp.Input
              type="email"
              placeholder="Email"
              value={emailSignUp}
              onChange={(e) => setEmailSignUp(e.target.value)}
            />
            <Comp.Input
              type="password"
              placeholder="Mot de passe"
              value={passwordSignUp}
              onChange={(e) => setPasswordSignUp(e.target.value)}
            />
            <Comp.Input
              type="password"
              placeholder="Confirmer le mot de passe"
              value={passwordConfirmSignUp}
              onChange={(e) => setPasswordConfirmSignUp(e.target.value)}
            />
            <Comp.Button> S'inscrire </Comp.Button>
            {/* <Comp.Button onClick={handleSubmitSignUp}> Sign Up </Comp.Button> */}
          </Comp.Form>
        </Comp.SignUpContainer>

        <Comp.SignInContainer signIn={signIn}>
          <Comp.Form>
            <Comp.Title>Se connecter</Comp.Title>
            <Comp.Input
              type="text"
              placeholder="Nom d'utilisateur"
              value={usernameSignIn}
              onChange={(e) => setUsernameSignIn(e.target.value)}
            />
            <Comp.Input
              type="password"
              placeholder="Mot de passe"
              value={passwordSignIn}
              onChange={(e) => setPasswordSignIn(e.target.value)}
            />
            <Comp.Anchor href="#">Mot de passe oublié ?</Comp.Anchor>
            <Comp.Button> Se connecter </Comp.Button>
            {/* <Comp.Button onClick={handleSubmitSignIn}> Sign In </Comp.Button> */}
          </Comp.Form>
        </Comp.SignInContainer>

        <Comp.OverlayContainer signinIn={signIn}>
          <Comp.Overlay signinIn={signIn}>
            <Comp.LeftOverlayPanel signinIn={signIn}>
              <Comp.Title>Re Bonjour !</Comp.Title>
              <Comp.Paragraph>
                {" "}
                Veuillez vous connecter afin d'accèder à Troc en Presqu'île
              </Comp.Paragraph>
              <Comp.GhostButton onClick={() => setSignIn(true)}>
                Se connecter
              </Comp.GhostButton>
            </Comp.LeftOverlayPanel>

            <Comp.RightOverlayPanel signinIn={signIn}>
              <Comp.Title>Bonjour !</Comp.Title>
              <Comp.Paragraph>
                Entrez vos données afin d'accèder à Troc en Presqu'île
              </Comp.Paragraph>
              <Comp.GhostButton onClick={() => setSignIn(false)}>
                S'inscrire
              </Comp.GhostButton>
            </Comp.RightOverlayPanel>
          </Comp.Overlay>
        </Comp.OverlayContainer>
      </Comp.LoginContainer>
    </Comp.ImgWrap>
  );
};

export default Login;
