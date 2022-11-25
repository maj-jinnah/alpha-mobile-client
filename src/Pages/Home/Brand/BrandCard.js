import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {

    const { name, image, category_id } = brand

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className='w-44 h-44'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/brand/${category_id}`}><button className="btn btn-primary">Visit Now</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;