import { useQuery } from "@tanstack/react-query";
// import { api } from "../../shared/api/api";
import { UserMenu } from "../../../entities/user/ui/UserMenu/UserMenu";
import axios from "axios";
import type { TReqCurrentUserDTO } from "../model/type";

export const CurrentUser = () => {
  const { data, isLoading, isError } = useQuery<TReqCurrentUserDTO>({
    queryKey: ["current-user"],
    queryFn: async () => {
      // const response = await api.get<TReqCurrentUserDTO>("/api/auth/me");
      const response = await axios.get<TReqCurrentUserDTO>(
        "https://overimpressible-monty-interconsonantal.ngrok-free.dev/api/auth/me",
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <span>Загружаю пользователя...</span>;
  }

  if (isError || !data) {
    return <div>Не удалось загрузить пользователя</div>;
  }

  return (
    <UserMenu displayName={data.display_name} avatarSrc={data.avatar_url} />
  );
};
