import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
    display: block;
    width: 100px;
    height: 58px;
    background: url(${logoPic});
    background-size: contain;
    background-repeat: no-repeat;
    border-bottom: 1px solid #f0f0f0;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    font-size: 17px;
    padding:15px;
    line-height: 28px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.mainPage {
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .searchIcon {
        position: absolute;
        right: 5px;
        bottom:5px;
        width:30px;
        height:30px;
        border-radius: 15px;
        line-height:30px;
        font-size: 25px;
        color: #969696;
        box-sizing: border-box;
        padding-left: 2px;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: 'Search'
})`
    
    margin-top:10px;
    margin-left: 20px;
    width:200px;
    height:38px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background: #eee;
    font-size:14px;
    color: #666;
    &::placeholder {
        color:#999;
    }
    &.focused {
        width: 250px;
    }
    &.slide-enter{
        width:200px;
        transition: all .3s ease-out;
    }
    &.slide-enter-active{
        width:250px;
    }
    &.slide-exit{
        width:250px;
    }
    &.slide-exit-active{
        width:200px;
        transition: all .2s ease-out;
    }
`

export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top: 59px;
    width:240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: white;
    & a{
        cursor:pointer;
    }
`

export const SearchInfoTitle = styled.div`
    margin-top: 10px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoRefresh = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        font-size: 12px;
        margin-right: 2px;
        transition: all 1s ease-in;
        transform:-origin:center center;
        display: block;
        float: left;
    }
`

export const SearchInfoList= styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    padding: 0 15px;
    line-height: 20px;
    font-size:12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom:10px;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float:right;
    margin-top 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.wri {
        color: #fff;
        background: #ec6149;
    }
`
