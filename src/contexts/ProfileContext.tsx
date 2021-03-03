
import { createContext, ReactNode, useEffect, useState } from "react";

import Swal from "sweetalert2";

interface GithubUser {
  avatar_url: string;
  name: string;
}

interface ProfileContextData {
  user: GithubUser;
}

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [user, setUser] = useState({} as GithubUser);

  useEffect(() => {
    Swal.fire({
      title: "Informe seu usuário do Github",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: false,
      confirmButtonText: "Confirmar",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Falha de requisição: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        setUser(result.value);
      }
    });
  }, []);
  return (
    <ProfileContext.Provider value={{ user }}>
      {children}
    </ProfileContext.Provider>
  );
}