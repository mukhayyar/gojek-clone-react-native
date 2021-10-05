import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import IconHome from './icon/home-active.png';
import IconOrder from './icon/order.png';
import IconHelp from './icon/help.png';
import IconInbox from './icon/inbox.png';
import IconAccount from './icon/account.png';

export default class App extends Component {
  render() {
  return (
    <View style={{flex:1}}>
        <ScrollView style={{flex:1, backgroundColor: 'white'}}>
          {/* Search bar */}
          <View style={{marginHorizontal:17, flexDirection:"row", paddingTop:15}}>
            <View style={{position: "relative", flex: 1}}>
              <TextInput placeholder="What do you want to eat?" style={{borderWidth: 1, borderColor: "#E8E8E8", borderRadius: 25, height:40, fontSize: 13, paddingLeft:45, paddingRight: 20, backgroundColor: "white", marginRight:18}} />
              <Image source={require('./icon/search.png')} style={{position: "absolute", top:5, left:12}} />
            </View>
            <View style={{width:35, alignItems:"center", justifyContent: "center"}}>
              <Image source={require('./icon/promo.png')} />
            </View>
          </View>
          {/* Gopay */}
          <View style={{marginHorizontal:17, marginTop:8}}>
            <View style={{flexDirection:"row", justifyContent:"space-between", backgroundColor: '#2C5FB8', borderTopLeftRadius:4, borderTopRightRadius:4, padding:14}}>
              <Image source={require('./icon/gopay.png')} />
              <Text style={{fontSize:17, fontWeight: "bold",color:"white"}}>Rp. 50.000</Text>
            </View>
            <View style={{flexDirection:"row",paddingTop:20, paddingBottom:14, backgroundColor:"#2F65BD", borderBottomLeftRadius:4, borderBottomRightRadius:4}}>
              <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
                <Image source={require('./icon/pay.png')} />
                <Text style={{fontSize:13, fontWeight:"bold",color:"white", marginTop:15}}>Pay</Text>
              </View>
              <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
                <Image source={require('./icon/nearby.png')} />
                <Text style={{fontSize:13, fontWeight:"bold",color:"white", marginTop:15}}>Nearby</Text>
              </View>
              <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
                <Image source={require('./icon/topup.png')} />
                <Text style={{fontSize:13, fontWeight:"bold",color:"white", marginTop:15}}>Top Up</Text>
              </View>
              <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
                <Image source={require('./icon/more.png')} />
                <Text style={{fontSize:13, fontWeight:"bold",color:"white", marginTop:15}}>More</Text>
              </View>
            </View>
          </View>
          {/* main feature */}
          <View style={{flexDirection:'row', flexWrap:'wrap', marginTop:18}}>
            <View style={{justifyContent:"space-between", flexDirection:'row', width:"100%", marginBottom: 18}}>
              <View style={{width:'25%', justifyContent:'center', alignItems: 'center'}}>
                <View style={{width: 58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:18, alignItems:'center', justifyContent:'center'}}>
                  <Image source={require('./icon/go-ride.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-MENU</Text>
              </View>
              <View style={{width:'25%', justifyContent:'center', alignItems: 'center'}}>
                <View style={{width: 58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:18, alignItems:'center', justifyContent:'center'}}>
                  <Image source={require('./icon/go-car.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-MENU</Text>
              </View>
              <View style={{width:'25%', justifyContent:'center', alignItems: 'center'}}>
                <View style={{width: 58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:18, alignItems:'center', justifyContent:'center'}}>
                  <Image source={require('./icon/go-bluebird.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-MENU</Text>
              </View>
              <View style={{width:'25%', justifyContent:'center', alignItems: 'center'}}>
                <View style={{width: 58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:18, alignItems:'center', justifyContent:'center'}}>
                  <Image source={require('./icon/go-send.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-MENU</Text>
              </View>
            </View>
            <View style={{justifyContent:"space-between", flexDirection:'row', width:"100%"}}>
              <View style={{width:'25%', justifyContent:'center', alignItems: 'center'}}>
                <View style={{width: 58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:18, alignItems:'center', justifyContent:'center'}}>
                  <Image source={require('./icon/go-deals.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-MENU</Text>
              </View>
              <View style={{width:'25%', justifyContent:'center', alignItems: 'center'}}>
                <View style={{width: 58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:18, alignItems:'center', justifyContent:'center'}}>
                  <Image source={require('./icon/go-pulsa.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-MENU</Text>
              </View>
              <View style={{width:'25%', justifyContent:'center', alignItems: 'center'}}>
                <View style={{width: 58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:18, alignItems:'center', justifyContent:'center'}}>
                  <Image source={require('./icon/go-food.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-MENU</Text>
              </View>
              <View style={{width:'25%', justifyContent:'center', alignItems: 'center'}}>
                <View style={{width: 58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:18, alignItems:'center', justifyContent:'center'}}>
                  <Image source={require('./icon/go-more.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-MENU</Text>
              </View>
            </View>
          </View>
          <View style={{height:17, backgroundColor: '#F2F2F4', marginTop:20}}></View>
          {/* go news */}
          <View style={{paddingTop:16, paddingHorizontal: 16}}>
            <View style={{position:'relative'}}>
              <Image source={require('./dummy/sepak-bola.jpg')} style={{height:170, width:'100%', borderRadius:6  }} />
              <View style={{width: "100%", height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black',opacity:0.2, borderRadius:6}}></View>
              <View style={{height:15, width:55, position:'absolute', top: 16, left:16}}>
                <Image source={require('./logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex:1}} />
              </View>
            </View>
            <View style={{paddingTop:16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth:1, marginBottom:20}}>
              <Text style={{fontSize:16, fontWeight:'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize:14, fontWeight:'500', color: '#7A7A7A', marginBottom:11}}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
              <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical:11, alignSelf:'flex-end', borderRadius:4}}>
                <Text style={{fontSize:13, fontWeight:'bold',color:'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
            <View style={{position:'relative'}}>
              <Image source={require('./dummy/sepak-bola.jpg')} style={{height:170, width:'100%', borderRadius:6  }} />
              <View style={{width: "100%", height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black',opacity:0.2, borderRadius:6}}></View>
              <View style={{height:15, width:55, position:'absolute', top: 16, left:16}}>
                <Image source={require('./logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex:1}} />
              </View>
            </View>
            <View style={{paddingTop:16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth:1, marginBottom:20}}>
              <Text style={{fontSize:16, fontWeight:'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize:14, fontWeight:'500', color: '#7A7A7A', marginBottom:11}}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
              <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical:11, alignSelf:'flex-end', borderRadius:4}}>
                <Text style={{fontSize:13, fontWeight:'bold',color:'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
            <View style={{position:'relative'}}>
              <Image source={require('./dummy/sepak-bola.jpg')} style={{height:170, width:'100%', borderRadius:6  }} />
              <View style={{width: "100%", height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black',opacity:0.2, borderRadius:6}}></View>
              <View style={{height:15, width:55, position:'absolute', top: 16, left:16}}>
                <Image source={require('./logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex:1}} />
              </View>
            </View>
            <View style={{paddingTop:16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth:1, marginBottom:20}}>
              <Text style={{fontSize:16, fontWeight:'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize:14, fontWeight:'500', color: '#7A7A7A', marginBottom:11}}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
              <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical:11, alignSelf:'flex-end', borderRadius:4}}>
                <Text style={{fontSize:13, fontWeight:'bold',color:'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
            <View style={{position:'relative'}}>
              <Image source={require('./dummy/sepak-bola.jpg')} style={{height:170, width:'100%', borderRadius:6  }} />
              <View style={{width: "100%", height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black',opacity:0.2, borderRadius:6}}></View>
              <View style={{height:15, width:55, position:'absolute', top: 16, left:16}}>
                <Image source={require('./logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex:1}} />
              </View>
            </View>
            <View style={{paddingTop:16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth:1, marginBottom:20}}>
              <Text style={{fontSize:16, fontWeight:'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize:14, fontWeight:'500', color: '#7A7A7A', marginBottom:11}}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
              <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical:11, alignSelf:'flex-end', borderRadius:4}}>
                <Text style={{fontSize:13, fontWeight:'bold',color:'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
            <View style={{position:'relative'}}>
              <Image source={require('./dummy/sepak-bola.jpg')} style={{height:170, width:'100%', borderRadius:6  }} />
              <View style={{width: "100%", height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black',opacity:0.2, borderRadius:6}}></View>
              <View style={{height:15, width:55, position:'absolute', top: 16, left:16}}>
                <Image source={require('./logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex:1}} />
              </View>
            </View>
            <View style={{paddingTop:16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth:1, marginBottom:20}}>
              <Text style={{fontSize:16, fontWeight:'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize:14, fontWeight:'500', color: '#7A7A7A', marginBottom:11}}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
              <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical:11, alignSelf:'flex-end', borderRadius:4}}>
                <Text style={{fontSize:13, fontWeight:'bold',color:'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
            <View style={{position:'relative'}}>
              <Image source={require('./dummy/sepak-bola.jpg')} style={{height:170, width:'100%', borderRadius:6  }} />
              <View style={{width: "100%", height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black',opacity:0.2, borderRadius:6}}></View>
              <View style={{height:15, width:55, position:'absolute', top: 16, left:16}}>
                <Image source={require('./logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex:1}} />
              </View>
            </View>
            <View style={{paddingTop:16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth:1, marginBottom:20}}>
              <Text style={{fontSize:16, fontWeight:'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize:14, fontWeight:'500', color: '#7A7A7A', marginBottom:11}}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
              <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical:11, alignSelf:'flex-end', borderRadius:4}}>
                <Text style={{fontSize:13, fontWeight:'bold',color:'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={{height:54, flexDirection:'row'}}>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{width:26, height:26}} source={IconHome} />
              <Text style={{fontSize:10, color:'#545454', marginTop:4, color:'#43AB4A'}}>Home</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{width:26, height:26}} source={IconOrder} />
              <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Order</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{width:26, height:26}} source={IconHelp} />
              <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Help</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{width:26, height:26}} source={IconInbox} />
              <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Inbox</Text>
            </View>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width:26, height:26}} source={IconAccount} />
              <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Account</Text>
            </View>
        </View>
      </View>
  );
};
};

const styles = StyleSheet.create({

});

// export default App;
