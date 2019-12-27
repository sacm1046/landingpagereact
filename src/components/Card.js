import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer d-flex justify-content-center">
                <a href="#" class="btn btn-primary">Find Out There!</a>
            </div>
        </div>
    );
}

export default Card;