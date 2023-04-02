import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { locationState } from "../../stores";

export const FIND_AROUND_USERS = gql`
  query findAroundUsers($bothLocation: FindAroundUserInput!) {
    findAroundUsers(bothLocation: $bothLocation) {
      id
      lat
      lng
      age
      nickname
      image
    }
  }
`;

export const useQueryFindAroundUsers = (): typeof result => {
  const [location] = useRecoilState(locationState);

  const result = useQuery(FIND_AROUND_USERS, {
    variables: {
      bothLocation: {
        lat1: Number(location.sw.replace(/\(|\)/g, "").split(", ")[0]),
        lng1: Number(location.sw.replace(/\(|\)/g, "").split(", ")[1]),
        lat2: Number(location.ne.replace(/\(|\)/g, "").split(", ")[0]),
        lng2: Number(location.ne.replace(/\(|\)/g, "").split(", ")[1]),
      },
    },
  });

  return result;
};