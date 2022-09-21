
export type LoadState<T> ={
    status: 'pending',
    promise: Promise<T>
} | {
    status: 'fulfilled',
    data: T
} | {
    status: 'rejected',
    error: unknown
}

export class Loadable<T> {
    #state: LoadState<T>;
    constructor(promise: Promise<T>){
        this.#state ={
            status: 'pending',
            promise: promise.then(
                (data) => {
                    this.#state = {
                        status: 'fulfilled',
                        data
                    };
                    return data;
                },(error) =>{
                    this.#state = {
                        status: 'rejected',
                        error: error
                    };
                    throw error
                }
            )
        }
    }
    getOrThrow(): T {
        switch(this.#state.status){
            case 'pending':
                throw this.#state.promise;
            case 'fulfilled':{
                return this.#state.data;
            }
            case 'rejected': {
                throw this.#state.error
            }
        }
    }
}