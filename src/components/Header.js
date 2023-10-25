import { moneyFormat } from "./Helpers"
function Header({ total, money }) {
    return (
        <>
            <div>
                {total > 0 && money - total !== 0 && (
                    <div>Harcayacak {moneyFormat(money - total)} $ paran kaldı!</div>
                )}
                {total === 0 && (
                    <div>Harcamak için {moneyFormat(money)} $ paran var!</div>
                )}                
                {money - total === 0 &&(
                    <div>Bütün harcamalar yapıldı. Bok gibi kaldın yine!</div>
                )}
            </div>

        </>
    )
}

export default Header