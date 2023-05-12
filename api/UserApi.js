
import { URL } from '../RestUrl';
import axios from 'axios';

const wrapPromise = () => {

const promise = (personId) => {
    return axios.post(URL + '/users/getbyId',personId).then(x => x.data);
};



  let status = "pending";
  let result = "";
  let suspender = (personId) => { 
      return promise(personId).then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
}
  return {
    read(personId) {
      if (status === "pending") {
        throw suspender(personId);
      } else if (status === "error") {
        throw result;
      }

      return result;
    }
  };
};


export const createResource = () => {
  return {
    person: wrapPromise(),
  };
};
