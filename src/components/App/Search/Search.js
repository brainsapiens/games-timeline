import React from 'react';
import styled from 'styled-components';

import iconSearch from '../../../images/icons/search.svg';

const Search = styled.div`
  position: relative;
`;

const SearchTooltip = styled.div`
  position: absolute;
  z-index: 103;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  padding: .6rem 1.2rem;
  background-color: ${props => props.theme.appSearch.tooltipBackgroundColor};
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
  pointer-events: none;
  user-select: none;
  opacity: 0;
  transition: opacity var(--transition-duration-basic);
`;

const SearchTooltipContent = styled.div`
  color: var(--color-darkest);
  text-align: center;
  white-space: nowrap;
  
  p {
    margin-bottom: -.3rem;
  }
  
  small {
    color: var(--color-dark);
  }
`;

const SearchButton = styled.button`
  padding: .4rem;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.appSearch.buttonColor};
  cursor: pointer;
  vertical-align: top;
        
  &:focus {
    > img {
      opacity: 1;
    }
    
    + ${SearchTooltip} {
      opacity: 1;
    }
  } 
  
  > img {
    display: block;
    opacity: .75;
    transition: opacity var(--transition-duration-basic);
    filter: ${props => props.theme.appSearch.buttonIconFilter};
  }
`;

const CommandKey = styled.span`
  position: relative;
  top: .225rem;
  font-size: 2rem;
  line-height: 1;
`;

const key = () => {
    const mac = window.navigator.platform === 'MacIntel';

    return mac ? (
        <CommandKey>&#8984;</CommandKey>
    ) : (
        'Ctrl'
    );
}

const AppSearch = () => {
    return (
        <Search>
            <SearchButton type='button'>
                <img src={iconSearch} width='24' height='24' alt='Search'/>
            </SearchButton>
            <SearchTooltip>
                <SearchTooltipContent>
                    <p>Use {key()} + F</p>
                    <small>Works like a charm!</small>
                </SearchTooltipContent>
            </SearchTooltip>
        </Search>
    );
};

export default AppSearch;
