import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        //ref es para decir que tiene una referencia o esta relacionado con otro modelo de datos
        ref: "userRole",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//Metodo para cifrar las contraseñas
// El usuario me da una contraseña , yo utilizo un metodo de bcrypt para cifrar la contraseña
userSchema.statics.cifrarPassword = async (pass) => {
  const salt = await bcrypt.genSalt(10); //gensalt es cuantas veces vamos a aplicar el algoritmo (10 veces en este caso)
  return await bcrypt.hash(pass, salt);
};

//Metodo para comparar las contraseñas
//Este metodo lo que retorna es un true o un false, si la contraseña coincide true, si no false
userSchema.statics.compararPassword = async (pass, passRecibida) => {
  return await bcrypt.compare(pass, passRecibida);
};

export default model("User", userSchema);
