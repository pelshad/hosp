import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/css/common.css';
import { boxLight } from '../utils/HeaderUtils';


const Header = () => {
    const nav = useLocation();
    
    return (
        <>
            <HeadBox>
                <HeadLink>
                    <Link to="/">
                        <div>
                            <div id="link" className={boxLight("main",nav.pathname)}>메인페이지</div>
                            <div className='dropdown-content'>
                            </div>
                        </div>
                    </Link>
                    <Link to="/sub">
                        <div>
                            <div id="link" className={boxLight("sub",nav.pathname)}>서브페이지1</div>
                            <div className='dropdown-content'>
                                <Link to="/sub/2">sub_2</Link>
                            </div>
                        </div>
                    </Link>
                </HeadLink>
            </HeadBox>
        </>
    );
};

const HeadBox = styled.header`
    color: red;
    display: flex;
`

const HeadLink = styled.nav`
    #link{
        color:black;
        background-color: white;
        height: inherit;
        text-decoration: none;
        display: inline-block;
        margin: 20px;
        padding: 5px;
        border: 2px solid rgba(36, 255, 102, 0.2);
        border-radius: 5px;
        &:hover{
        transition: 0.5s;
        filter: drop-shadow(0 0 2px rgba(36, 255, 102, 0.2))
        drop-shadow(0 0 5px rgba(36, 255, 102, 0.2))
        drop-shadow(0 0 15px rgba(36, 255, 102, 0.2));
        }
    }
    .on{
        transition: 0.5s;
        border: 2px solid rgba(146, 212, 255, 0.7);
        filter: drop-shadow(0 0 2px rgba(146, 212, 255, 0.7))
        drop-shadow(0 0 5px rgba(146, 212, 255, 0.7))
        drop-shadow(0 0 15px rgba(146, 212, 255, 0.7));
    }
    
`

export default Header;