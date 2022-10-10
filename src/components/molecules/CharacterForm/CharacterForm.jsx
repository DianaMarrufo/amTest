import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AppInput } from "../../atoms/AppInput";
import "./CharacterForm.scss";
import { AppRadio } from "../../atoms/AppRadio/AppRadio";
import { AppFile } from "../../atoms/AppFile/AppFile";
import { AppLabel } from "../../atoms/AppLabel";
import { AppButton } from "../../atoms/AppButton/AppButton";

export const CharacterForm = () => {
  return (
    <div className="character-form">
      <div className="character-form__title">Agrega un personaje</div>
      <Formik
        initialValues={{
          firstName: "",
          birthdate: "",
          eyes: "",
          hair: "",
          gender: "",
          position: "",
          photo: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(4, "El campo debe contener al menos 4 caracteres.")
            .max(20, "El campo no puede superar los 20 caracteres.")
            .required("Este campo es requerido"),
          birthdate: Yup.date().required("Este campo es requerido"),
          eyes: Yup.string()
            .min(3, "El campo debe contener al menos 3 caracteres.")
            .max(20, "El campo no puede superar los 20 caracteres.")
            .required("Este campo es requerido"),
          hair: Yup.string()
            .min(3, "El campo debe contener al menos 3 caracteres.")
            .max(20, "El campo no puede superar los 20 caracteres.")
            .required("Este campo es requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <div className="character-form__box">
              <div className="character-form__box-one">
                <AppInput label="NOMBRE" name="firstName" type="text" />
                <AppInput label="COLOR DE OJOS" name="eyes" type="text" />
                <AppLabel htmlFor="gender" title="GÉNERO" />
                <div className="character-form__radio">
                  <AppRadio label="Mujer" name="gender" value="feminine" />
                  <AppRadio label="Hombre" name="gender" value="male" />
                </div>
              </div>
              <div className="character-form__box-two">
                <AppInput label="CUMPLEAÑOS" name="birthdate" type="date" />
                <AppInput label="COLOR DE PELO" name="hair" type="text" />
                <AppLabel htmlFor="position" title="POSICIÓN" />
                <div className="character-form__radio">
                  <AppRadio label="Estudiante" name="position" value="student" />
                  <AppRadio label="Staff" name="position" value="staff" />
                </div>
              </div>
            </div>

            <AppFile label="FOTOGRAFÍA" name="photo"  accept="image/png, image/jpeg"/>
            <div className="character-form__button">
              <AppButton title="GUARDAR" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
