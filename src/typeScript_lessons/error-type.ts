//          ASYNC AWAIT

// export const addTaskTC = (title: string, todolistId: string) => async (dispatch: Dispatch<ActionsType>) => {
//     dispatch(setStatusAC('loading'))
//
//     try {
//         const res: any = await todolistsAPI.createTask(todolistId, title);
//
//         if (res.data.resultCode === Result_Code.OK) {
//             const task = res.data.data.item
//             const action = addTaskAC(task)
//             dispatch(action)
//             dispatch(setStatusAC('succeeded'))
//         } else {
//             handleServerAppError<{ item: TaskType }>(dispatch, res.data)
//         }
//     } catch (e) {
// проверка на то что, ошибка относится к ошибкам axios
// уточняем данную ошибку при помощи дженерика, тип ErrorType ,берем из бэкенда (сообщение ошибки)
//         if (axios.isAxiosError<ErrorType>(e)) {
//             const error = e.response ? e.response?.data.messages[0].message : e.message
//             handleServerNetworkError(dispatch, error)
//             return;
//         }
// Если это ошибка не относится к ошибкам axios, то значит это ошибка JS у которой тип Error
//         const error = (e as Error).message
//         handleServerNetworkError(dispatch, error)
//     }

//          THAN, CATCH

// export const updateTaskTC = (taskId: string, domainModel: UpdateDomainTaskModelType, todolistId: string) =>
//     (dispatch: Dispatch<ActionsType>, getState: () => AppRootStateType) => {
//         dispatch(setStatusAC('loading'))
//
//         const state = getState()
//         const task = state.tasks[todolistId].find(t => t.id === taskId)
//         if (!task) {
//             //throw new Error("task not found in the state");
//             console.warn('task not found in the state')
//             return
//         }
//
//         const apiModel: UpdateTaskModelType = {
//             deadline: task.deadline,
//             description: task.description,
//             priority: task.priority,
//             startDate: task.startDate,
//             title: task.title,
//             status: task.status,
//             ...domainModel
//         }
//
//         todolistsAPI.updateTask(todolistId, taskId, apiModel)
//             .then(res => {
//                 if (res.data.resultCode === Result_Code.OK) {
//                     const action = updateTaskAC(taskId, domainModel, todolistId)
//                     dispatch(action)
//                     dispatch(setStatusAC('succeeded'))
//                 } else {
//                     res.data.data.item
//                     handleServerAppError(dispatch, res.data)
//                 }
//             })
//              // Ошибка которая попадает в catch относится к ошибке axios, мы ее уточняем при помощи дженерика
//             .catch((e: AxiosError<ErrorType>) => {
//                 const error = e.response ? e.response?.data.messages[0].message : e.message
//                 handleServerNetworkError(dispatch, error)
//             })
//     }