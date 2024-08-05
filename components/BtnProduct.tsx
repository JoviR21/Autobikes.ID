import { FaArrowRightLong } from "react-icons/fa6";
import styled from "styled-components";

export default function BtnProduct() {

    const BtnProduct = styled.button`
        transition: all 0.3s ease-in-out;
        &:hover {
            transform: translateX(5px);
        }
    `

    return (
        <BtnProduct className="btn btn-sm btn-outline font-overpass font-medium">See Details <FaArrowRightLong /></BtnProduct>
    )
}