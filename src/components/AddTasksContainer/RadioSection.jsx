import React from 'react';
import { shape, func, string } from 'prop-types';
import Radio from '../common/Radio';
import { TASKS_TYPES } from '../../constants';

const RadioSection = ({ taskObj, checkBoxChangeHandler, variant }) => {
  const isPriority = variant === 'priority';

  const firstRadioVal = isPriority ? TASKS_TYPES.urgent : TASKS_TYPES.important;
  const secondRadioVal = isPriority ? TASKS_TYPES.not_urgent : TASKS_TYPES.not_important;
  return (
    <fieldset>
      <legend>{isPriority ? 'Urgent' : 'Important'}</legend>
      <div>
        <Radio
          id={firstRadioVal}
          name={firstRadioVal}
          value={firstRadioVal}
          checked={taskObj[variant] === firstRadioVal}
          onChangeHandler={(e) => checkBoxChangeHandler(e.target.value, variant)}
          label="Yes"
        />
      </div>
      <div>
        <Radio
          id={secondRadioVal}
          name={secondRadioVal}
          value={secondRadioVal}
          checked={taskObj[variant] === secondRadioVal}
          onChangeHandler={(e) => checkBoxChangeHandler(e.target.value, variant)}
          label="No"
        />
      </div>
    </fieldset>
  );
};

RadioSection.propTypes = {
  variant: string,
  taskObj: shape({}),
  checkBoxChangeHandler: func
};

export default RadioSection;
