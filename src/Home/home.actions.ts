import { Dispatch, Store } from "redux"

export enum ActionTypeHome {
    GET_ALL_COINS = "GET_ALL_COINS",
    RECEIVED_ALL_COINS = "RECEIVED_ALL_COINS",
}

export interface ReceiveCoin {
    readonly type: ActionTypeHome.RECEIVED_ALL_COINS
    readonly data: Coin[]
}

export interface GetAllCoin {
    readonly type: ActionTypeHome.GET_ALL_COINS
}

export function getAllCoinsThunk(dispatch: Dispatch<StoreState>,
                                 getState: () => StoreState,
                                 { cmcAPI }: { cmcAPI: ApiRequest }) {

    return cmcAPI.getJSON("/")
        .then( (payload) => {
            dispatch(receivedCoinsAction(payload))
        })
}

export const getAllCoinsAction = () => { return type: ActionTypeHome.GET_ALL_COINS }

export function receivedCoinsAction(data: Coin[]): ReceiveCoin {
    return {
        type: ActionTypeHome.RECEIVED_ALL_COINS,
        data,
    }
}

// export function getAllCoins() {
// }
