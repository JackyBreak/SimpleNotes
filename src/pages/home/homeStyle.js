import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
        &.slide-enter{
        width:200px;
        transition: all .3s ease-out;
    }
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top:30px;
    width: 625px;
    float:left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    margin-left: -10px;
    overflow: hidden;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    margin-left: 10px;
    margin-bottom: 18px;
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    padding-right:10px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-img{
        margin-right:10px;
        display: block;
        float: left;
        width:32px;
        height: 32px;
    }
`;

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .list-img{
        display:block;
        width: 150px;
        height: 100px;
        float: right;
        border-radius:10px;
    }
`;

export const ListInfo = styled.div`
    width:458px;
    float:left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
    }
    .desc {
        line-height:24px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;  
`;

export const RecommendItem = styled.div`
    margin-bottom: 5px;
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const LoadMore = styled.div`
    margin: 30px 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius:20px;
    color: #fff;
    cursor:pointer;
`;

export const GoTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align:center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`;

export const WriterWrapper = styled.div`
    width: 278px;
    border-radius: 3px;
    height: 400px;
    line-height: 300px;
    text-align: center;
    position:absolute;
`;

export const WriterRecommendTitle = styled.div`
    box-sizing: border-box;
    height: 30px;
    width: 100%;
    line-height: 30px;
    text-align: left;
    font-size: 13px;
    color: #969696; 
    padding-left: 5px;
`;

export const WriterListRefresh = styled.div`
    float: right;
`;

export const WriterList = styled.div`
    width: 100%;
    height: 370px;
    overflow: hidden;
`;

export const WriterListItem = styled.div`
    margin-top: 15px;
    height: 47px;
    width: 100%;
    .avatar-img{
        width: 47px;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
        float: left;
    }
`
export const WriterDetail = styled.div`
    position: absolute;
    height: 47px;
    width: 100%;
`;
export const WriterInfo = styled.div`
    height: 24px;
    width: 78%;
    margin-top: 2px;
    font-size: 14px;
    color: #2f2f2f;
    text-align: left;
    line-height: 30px;
    padding-left: 55px;
`;
export const WriterFollow = styled.a`
    cursor: pointer;
    height: 24px;
    width: 22%;
    display: block;
    float: right;
    color: #42c02e;
    font-size: 13px;
`

export const WriterIntro = styled.div`
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
    line-height: 19px;
    padding-left: 55px;
    text-align:left;
`;