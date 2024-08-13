import styled from "styled-components";

export default function ButtonSlider() {

    const ButtonSlider = styled.button`
    padding: 0px 18px;
    border: 2px solid #fff;
    border-radius: 6px;
    backdrop-filter: blur(10px);
    `

    return (
        <ButtonSlider className="sm:w-fit btn-xs sm:btn-sm md:btn-md btn btn-outline">
            See more
        </ButtonSlider>
    )
}