import React from "react";
import ToyListViewItem from "./ToyListViewItem";

const ToyListView = () => {
    return(
        <div style={{width: '100vw'}}>
            <ToyListViewItem imgSrc="https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            name='Bear toy' price={5} description="Testing"/>
            <ToyListViewItem imgSrc="https://images.unsplash.com/photo-1536293182766-c9c0c4133b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
            name='Pillow Toy' price={5} description="Testing"/>
        </div>
    );
}

export default ToyListView;