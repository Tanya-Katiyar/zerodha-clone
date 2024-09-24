import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_pg/home/Hero';

//Test Suite
describe('Hero Component', ()=> {
    test('renders hero image', ()=> {
        render(<Hero />);
        const heroImg = screen.getByAltText("Hero");
        expect(heroImg).toBeInTheDocument();
        expect(heroImg).toHaveAttribute("src","media/homeHero.png");
    });


    test('renders signup button', ()=> {
        render(<Hero />);
        const signupbtn = screen.getByRole("button");
        expect(signupbtn).toBeInTheDocument();
        expect(signupbtn).toHaveClass("btn-primary");
    });
});

