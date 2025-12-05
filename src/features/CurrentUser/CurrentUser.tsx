import { useQuery } from "@tanstack/react-query";
import { api } from "../../shared/api/api";
import { UserMenu } from "../../entities/user/ui/UserMenu/UserMenu";

export type TReqCurrentUserDTO = {
  id: number;
  name: string;
  email: string;
};

export const CurrentUser = () => {
  const { data, isLoading, isError } = useQuery<TReqCurrentUserDTO>({
    queryKey: ["current-user"],
    queryFn: async () => {
      const response = await api.get<TReqCurrentUserDTO>("/users/2");
      return response.data;
    },
  });

  if (isLoading) {
    return <span>Загружаю пользователя...</span>;
  }

  if (isError || !data) {
    return <div>Не удалось загрузить пользователя</div>;
  }

  return <UserMenu displayName={data.name} />;
};
