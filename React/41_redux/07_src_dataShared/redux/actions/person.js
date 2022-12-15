import {ADD_PERSON} from "../constants";

export const addPersonAction = (person) => ({type: ADD_PERSON, data: person});