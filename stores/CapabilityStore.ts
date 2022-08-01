import create from 'zustand'

// types
import { WorkScopeType } from '$types/workTypes'

export type CapabilityTypes = WorkScopeType | null

interface CapabilityState {
  currentCapability: CapabilityTypes
  changeCapability: (type: CapabilityTypes) => void
}

const useCapabilityStore = create<CapabilityState>((set) => ({
  currentCapability: null,
  changeCapability: (type) => set(() => ({ currentCapability: type })),
}))

export default useCapabilityStore
