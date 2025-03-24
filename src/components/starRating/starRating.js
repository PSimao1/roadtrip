
import '../../App.css'

const stars = [1, 2, 3, 4, 5];

function StarRate({ starNumber }) {
    return (
        <div className="star-rating">
            {stars.map((star, i) => (
                <span key={i} className={i < starNumber ? "star on" : "star off"}>
                    &#9733;
                </span>
            ))}
        </div>
    );
}

export default StarRate;
