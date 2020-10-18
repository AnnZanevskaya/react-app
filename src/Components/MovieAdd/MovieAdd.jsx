import React from "react";
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import { useToggle } from '../../Hooks/hooks';
import { genres } from '../../Constants/constants';
import { addMovie } from "../../Redux/actions";
import { movieValidationSchema } from "../../Validation/validation";

const MovieAdd = () => {
    const [isShow, setIsShowing] = useToggle();
    const dispatch = useDispatch();

    let movie = {
        title: "", release_date: null, poster_path: '', overview: '', genres: [], runtime: 0
    }

    const formik = useFormik({
        initialValues: movie,
        validate: movieValidationSchema,
        onSubmit: handleSubmit
    });

    function toggle() {
        setIsShowing();
    }

    function handleSubmit() {
        dispatch(addMovie(formik.values));
        toggle();
    }

    const selectedGenres = formik.values.genres.map((elem) => { return { label: elem, value: elem } });

    return (
        <>
            <Modal show={isShow} handleClose={toggle}>
                <form onSubmit={(e) => { formik.handleSubmit(); e.preventDefault(); }}>
                    <h2 className="description">Add Movie</h2>
                    <Input name="title" type="text" label="Title" placeholder="Title here" value={formik.values.title} onChange={formik.handleChange} validationError={formik.errors.title} />
                    <Input name="release_date" type="date" label="Release Date" placeholder="Select Date" value={formik.values.release_date} onChange={formik.handleChange} validationError={formik.errors.release_date} />
                    <Input name="poster_path" type="text" label="Movie URL" placeholder="Movie Url here" value={formik.values.poster_path} onChange={formik.handleChange} validationError={formik.errors.poster_path} />
                    <Input name="overview" type="text" label="Overview" placeholder="Overview here" value={formik.values.overview} onChange={formik.handleChange} validationError={formik.errors.overview} />
                    <Select name="genre" type="text" label="Genre" options={genres} preselected={selectedGenres} onSelectChange={formik.setFieldValue} validationError={formik.errors.genres} />
                    <Input name="runtime" type="number" label="Runtime" placeholder="Runtime here" value={formik.values.runtime} onChange={formik.handleChange} validationError={formik.errors.runtime} />

                    <div className="modal__buttons">
                        <button className="header__button button button-bordered">RESET</button>
                        <button className="header__button button button-red">SUBMIT</button>
                    </div>
                </form>
            </Modal>
            <button className="header__button button button-gray" onClick={toggle}>+ ADD MOVIE</button>
        </>
    );
}

export default MovieAdd;
