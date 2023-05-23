import React from 'react';
import styles from './modal-switch.module.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Modal from '../../components/modal/modal';
import { useDispatch } from 'react-redux';
import { closeIngredModal } from '../../store/actions/ingredient-detail';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';

function ModalSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(closeIngredModal());
  }

  return (
    <Routes>
      <Route
        path='/ingredients/:id'
        // location={background || location}
        element={<IngredientDetails />}
      />
    </Routes>
  );
}

export { ModalSwitch };
