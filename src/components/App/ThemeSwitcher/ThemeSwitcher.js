import React, {useContext} from 'react';
import styled from 'styled-components';

import AppContext from '../../../AppContext';

const ThemeSwitcher = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const Switcher = styled.span`
  position: relative;
  display: block;
  width: 4.5rem;
  height: 2rem;
  padding: .3rem;
  overflow: hidden;
  border-radius: 1rem;
  background-color: #fafafa;
  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, .1);
  transition: background-color var(--transition-duration-basic);
  
  &.off {
    background-color: red;
  }
  
  &.on {
    background-color: green;
  }
  
  > input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    
    &:checked + span {
      left: 2.5rem;
      box-shadow: -1px 1px 3px 2px rgba(0, 0, 0, .2);
    }
    
    &:focus-visible + span {
      box-shadow: 0 0 0 2px ${props => props.theme.global.outlineColor};
    }
  }

  > span {
    position: relative;
    left: 0;
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, .2);
    pointer-events: none;
    transition: left var(--transition-duration-basic);
    
    &::before,
    &::after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
      font-size: 1rem;
    }
    &::before {
      right: 100%;
      margin-right: .6rem;
      content: 'on';
    }
    &::after {
      left: 100%;
      margin-left: .3rem;
      content: 'off';
    }
  }
`;

const AppThemeSwitcher = () => {
    const {theme, toggleTheme} = useContext(AppContext);

    return (
        <ThemeSwitcher>
            Dark mode&nbsp;
            <Switcher className={theme === 'dark' ? 'on' : 'off'}>
                <input
                    type='checkbox'
                    checked={theme === 'dark' ? 'checked' : ''}
                    onChange={toggleTheme}
                />
                <span/>
            </Switcher>
        </ThemeSwitcher>
    );

};

export default AppThemeSwitcher;
