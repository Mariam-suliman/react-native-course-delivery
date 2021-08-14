import React,{useState,useEffect} from 'react';
import { View,Text ,FlatList,ActivityIndicator } from 'react-native';
import { RepoCard, RepoHeader } from '../../components';
import styles  from './styles';
import { getAllRepos } from "../../services/repos";

// const data=[
//   {
//     id:1,
//     title:'react-native',
//     describtion:'Facebook framework for developing apps',
//     starsNumber: 1234,
//     issuesNumber:16,
//     providerName:'Facebook',
//     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png'
//   },

//   {
//     id:2,
//     title:'flutter',
//     describtion:'Google framework for developing apps',
//     starsNumber: 1234,
//     issuesNumber:16,
//     providerName:'Google',
//     image:'https://logowik.com/content/uploads/images/flutter5786.jpg'
//   },
//   {
//     id:3,
//     title:'react-native',
//     describtion:'Facebook framework for developing apps',
//     starsNumber: 1234,
//     issuesNumber:16,
//     providerName:'Facebook',
//     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png'
//   },

//   {
//     id:4,
//     title:'flutter',
//     describtion:'Google framework for developing apps',
//     starsNumber: 1234,
//     issuesNumber:16,
//     providerName:'Google',
//     image:'https://logowik.com/content/uploads/images/flutter5786.jpg'
//   },
// ]

const Home = ({navigation,route}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const _onLoad = async () =>
  {
    const _data = await getAllRepos(page);
    setData([...data, ..._data]);
    setLoading(false);
  };

  useEffect(()=>{
    _onLoad()
  },[page]);

  // console.log("data",data);


  const renderItem =(data)=>{
    return(
      <RepoCard
      key={data.item.id}
      title={data.item.full_name}
      description={data.item.description}
      imageSrc={data.item.owner.avatar_url}
      issuesNumber={data.item.open_issues}
      providerName={data.item.owner.login}
      starsNumber={data.item.stargazers_count}
      numberOfLines={1}
           onPress={()=>navigation.navigate('Repo' ,{data:data.item})}
      />
    )
  }
  
  const increasePageNumber = () => {
    setLoading(true);
    setPage((val) => val + 1);
  };
  // console.warn(page);
    return (
      <>
      <RepoHeader text={"All repositories"} />
          <FlatList 
          data={data} 
          renderItem={renderItem} 
          onEndReached={increasePageNumber}
          onEndReachedThreshold={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          />
          {loading && <ActivityIndicator style={{color:'balck'}} />}
        </>
      );
}
 
export default Home;