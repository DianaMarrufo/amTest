import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AppInput } from "../../atoms/AppInput";
import { AppRadio } from "../../atoms/AppRadio/AppRadio";
import { AppFile } from "../../atoms/AppFile/AppFile";
import { AppLabel } from "../../atoms/AppLabel";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { createCharacter } from "../../../features/characters/characterSlice";
import "./CharacterForm.scss";
import { useDispatch } from "react-redux";

export const CharacterForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="character-form">
      <div className="character-form__title">Agrega un personaje</div>
      <Formik
        initialValues={{
          name: "",
          dateOfBirth: "",
          eyeColour: "",
          hairColour: "",
          gender: "",
          position: "",
          image: "",
        }}
        onSubmit={(values) => {
          values.image = 'http://hp-api.herokuapp.com/images/norris.JPG';
          dispatch(createCharacter(values));
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(4, "El campo debe contener al menos 4 caracteres.")
            .max(20, "El campo no puede superar los 20 caracteres.")
            .required("Este campo es requerido"),
          dateOfBirth: Yup.date().required("Este campo es requerido"),
          eyeColour: Yup.string()
            .min(3, "El campo debe contener al menos 3 caracteres.")
            .max(20, "El campo no puede superar los 20 caracteres.")
            .required("Este campo es requerido"),
          hairColour: Yup.string()
            .min(3, "El campo debe contener al menos 3 caracteres.")
            .max(20, "El campo no puede superar los 20 caracteres.")
            .required("Este campo es requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <div className="character-form__box">
              <div className="character-form__box-one">
                <AppInput label="NOMBRE" name="name" type="text" />
                <AppInput label="COLOR DE OJOS" name="eyeColour" type="text" />
                <AppLabel htmlFor="gender" title="GÉNERO" />
                <div className="character-form__radio">
                  <AppRadio label="Mujer" name="gender" value="feminine" />
                  <AppRadio label="Hombre" name="gender" value="male" />
                </div>
              </div>
              <div className="character-form__box-two">
                <AppInput label="CUMPLEAÑOS" name="dateOfBirth" type="date" />
                <AppInput label="COLOR DE PELO" name="hairColour" type="text" />
                <AppLabel htmlFor="position" title="POSICIÓN" />
                <div className="character-form__radio">
                  <AppRadio
                    label="Estudiante"
                    name="position"
                    value="student"
                  />
                  <AppRadio label="Staff" name="position" value="staff" />
                </div>
              </div>
            </div>

            <AppFile
              label="FOTOGRAFÍA"
              name="image"
              accept="image/png, image/jpeg"
            />

            <div className="character-form__button">
              <AppButton title="GUARDAR" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
