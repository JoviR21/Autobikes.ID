import Link from "next/link";
import { CiCircleChevRight } from "react-icons/ci";
import styled from "styled-components";

export default function ButtonCtg() {

    const ButtonCtg = styled.button`
        transition: all 0.3s;
        &:hover {
            transform: translateX(5px);
            color: #F05454;
        }
    `

    return (
        <Link href="/motorcycles">
            <ButtonCtg className="text-3xl"><CiCircleChevRight  /></ButtonCtg>
        </Link>
    )
}