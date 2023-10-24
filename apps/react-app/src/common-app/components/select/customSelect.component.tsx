import React from 'react';
import * as classes from './customSelect.styles';

interface Props {
  listOptions: string[];
  label: string;
}
export const CustomSelect: React.FC<Props> = ({ listOptions, label }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<string>(label);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className={classes.selectContainer}>
      <div className={classes.selectContent} onClick={toggleIsOpen}>
        <span>{selectedOption || label}</span>
        <img src="./assets/arrow_select.svg" alt="arrow select" className={classes.rotate(isOpen)} />
      </div>
      {isOpen && (
        <ul className={classes.listContainer}>
          {listOptions &&
            listOptions.map((option, index) => (
              <li key={index} onClick={() => handleOptionSelect(option)}>
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
