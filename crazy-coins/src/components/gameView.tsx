

export default function GameView() {

    //TODO we will read these in state once we have the actions set up to calculate them in place upon initial game setup.
    const dateToday = new Date();
    const dayCounter = 0;
    const portfolioValue = 0;
    const money = 0;
    const netWorth = portfolioValue + money;

    return(
        <div className = "game-view-wrapper">
            <div className = "metrics-wrapper">
                <p>{dateToday.toString()}</p>
                <p>Day {dayCounter}</p>
                <p>Portfolio: ${portfolioValue}</p>
                <p>Cash on hand: ${money}</p>
                <p>Your net worth: ${netWorth}</p>
            </div>
        </div>
    )
}