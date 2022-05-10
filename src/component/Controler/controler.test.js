import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import ControlerMethods from "../Controler/index";
import ReduxProvider from '../../store/wrapper';
import { configureStore } from "@reduxjs/toolkit";
import reducers from '../../store/index';

describe("Filter Upcoming Status", () => { 
    test("When upcoming status is True", () => {
        const store = configureStore(reducers);
        const wrapper = ({ children }) => (
            <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
          );
        const { result } = renderHook(() => { 
        ControlerMethods();
        },{ wrapper });
        const product = act(()=>{
            result.current.getProductByUpcomingStatus("True");
        });
        
        expect(product[0].upcoming).toBe(true);
     });
     /*test("When upcoming status is False", () => {
        const { result } = renderHook(() => ControlerMethods());
        const productB = act(()=>{
            result.current.getProductByUpcomingStatus("False");
        });
        expect(productB[0].upcoming).toBe(false);
     });*/
});
