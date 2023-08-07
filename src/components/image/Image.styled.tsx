import styled from "@emotion/styled"

const Image = styled.img(({width, height}) => ({
    borderRadius: '7px',
    width,
    height,
  }))

export default Image;