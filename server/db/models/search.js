import { Schema, model } from "mongoose";

const searchSchema = new Schema({
    url: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    keyWords: {
      type: String,
      trim: true,
    },
    
  });
  
  const Search = model("Search", searchSchema);
  
  export default Search;