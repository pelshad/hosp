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
                        <ul className='menuBox'>
                            <li>
                                <Link to="/" id="link" className={boxLight("main",nav.pathname)}>
                                        메인메뉴1
                                </Link>
                                <ul className='subBox'>
                                    <li>메인 메뉴1</li>
                                    <li>메뉴2</li>
                                    <li>메뉴3</li>
                                    <li>메뉴4</li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/sub" id="link" className={boxLight("sub",nav.pathname)}>
                                        메인메뉴2
                                </Link>
                                <ul className='subBox'>
                                    <li>서브 메뉴1</li>
                                    <li>메뉴2</li>
                                    <li>메뉴3</li>
                                    <li>메뉴4</li>
                                </ul>
                            </li>
                        </ul>
                </HeadLink>
            </HeadBox>
        </>
    );
};

const HeadBox = styled.header`
        height:200px;

    `

const HeadLink = styled.nav`
    #link{
        padding: 10px;
        background-color: white;
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