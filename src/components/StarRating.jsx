import React from 'react'

const StarRating = ({ rating }) => {
    console.log(rating);
    const RoundedRating = Math.round(rating);
    return (
        <div className="rating justify-center w-full mb-5 gap-2 mt-7 rating-lg">
            <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
                value={1}
                checked={RoundedRating === 1}
                readOnly
            />
            <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
                value={2}
                checked={RoundedRating === 2}
                readOnly
            />
            <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
                value={3}
                checked={RoundedRating === 3}
                readOnly
            />
            <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
                value={4}
                checked={RoundedRating === 4}
                readOnly
            />
            <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
                value={5}
                checked={RoundedRating === 5}
                readOnly
            />
        </div>
    );
}

export default StarRating