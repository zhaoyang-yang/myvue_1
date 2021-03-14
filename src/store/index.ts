import { ActionTree,createStore } from "vuex";
import { Menu } from "@/role/Menu";
import router from "@/router";
import * as types from "./VuexTypes";

export interface State{
  role?: number | null;
  menuList?: Menu[];
}

const state: State = {
  role: null,
  menuList: []
}

const mutations = {
[types.SET_ROLE](state:State , data:number){
  state.role = data;
},
[types.SET_MENULIST](state:State , data:Menu[]){
  state.menuList=data;
}
}

const getters = {
  premission: (state: State) => (level: number[]) =>
    level.some(l => l == state.role)
};