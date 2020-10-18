import React from "react";
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import { genres } from '../../Constants/constants';
import { updateMovie } from "../../Redux/actions";
import { movieValidationSchema } from "../../Validation/validation";

const MovieEdit = ({ movie, show, handleClose }) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: movie,
        validate: movieValidationSchema,
        onSubmit: handleSubmit
    });

    function handleSubmit() {
        dispatch(updateMovie(formik.values));
        handleClose();
    }

    const selectedGenres = formik.values.genres.map((elem) => { return { label: elem, value: elem } });

    return (
        <>
            <Modal show={show} handleClose={handleClose}>
                <form onSubmit={(e) => { formik.handleSubmit(); e.preventDefault(); }}>
                    <h2 className="description">Edit Movie</h2>
                    <Input name="id" type="text" label="Movie Id" value={movie.id} />
                    <Input name="title" type="text" label="Title" placeholder="Title here" value={formik.values.title} onChange={formik.handleChange} validationError={formik.errors.title} />
                    <Input name="release_date" type="date" label="Release Date" placeholder="Select Date" value={formik.values.release_date} onChange={formik.handleChange} validationError={formik.errors.release_date} />
                    <Input name="poster_path" type="text" label="Movie URL" placeholder="Movie Url here" value={formik.values.poster_path} onChange={formik.handleChange} validationError={formik.errors.poster_path} />
                    <Input name="overview" type="text" label="Overview" placeholder="Overview here" value={formik.values.overview} onChange={formik.handleChange} validationError={formik.errors.overview} />
                    <Select name="genre" type="text" label="Genre" options={genres} preselected={selectedGenres} onSelectChange={formik.setFieldValue} validationError={formik.errors.genres} />
                    <Input name="runtime" type="number" label="Runtime" placeholder="Runtime here" value={formik.values.runtime} onChange={formik.handleChange} validationError={formik.errors.runtime} />

                    <div className="modal__buttons">
                        <button className="header__button button button-bordered">RESET</button>
                        <button type="submit" className="header__button button button-red">SUBMIT</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default MovieEdit;
