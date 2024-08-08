import { CiCircleChevRight } from "react-icons/ci";
import styled from "styled-components";

export default function BtnAtc() {

    const ButtonAtc = styled.button`
        transition: all 0.3s;
        &:hover {
            transform: translateX(8px);
            color: #F05454;
        }
    `

    return (
        <ButtonAtc className="text-5xl"><CiCircleChevRight /></ButtonAtc>
    )
}