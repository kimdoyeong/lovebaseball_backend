import { model, Schema, Document } from "mongoose";

export interface IPlayerSchema extends Document {
  updatedAt: number;
  id: number;
  player: any;
}
const playerSchema = new Schema({
  id: {
    type: Number
  },
  player: {
    type: Object
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Player = model<IPlayerSchema>("Player", playerSchema);

export default Player;
