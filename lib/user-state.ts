export interface UserState {
  phone: string
  step: 'menu' | 'waiting_selection' | 'waiting_followup'
  selectedOption?: '1' | '2' | '3'
  lastActivity: Date
}

class UserStateManager {
  private states = new Map<string, UserState>()

  getState(phone: string): UserState {
    const existing = this.states.get(phone)
    if (existing) {
      return existing
    }

    const newState: UserState = {
      phone,
      step: 'menu',
      lastActivity: new Date()
    }
    this.states.set(phone, newState)
    return newState
  }

  updateState(phone: string, updates: Partial<UserState>): UserState {
    const current = this.getState(phone)
    const updated: UserState = {
      ...current,
      ...updates,
      lastActivity: new Date()
    }
    this.states.set(phone, updated)
    return updated
  }

  resetState(phone: string): UserState {
    const resetState: UserState = {
      phone,
      step: 'menu',
      lastActivity: new Date()
    }
    this.states.set(phone, resetState)
    return resetState
  }

  cleanupOldStates(maxAge: number = 30 * 60 * 1000): void {
    const now = new Date()
    for (const [phone, state] of this.states.entries()) {
      if (now.getTime() - state.lastActivity.getTime() > maxAge) {
        this.states.delete(phone)
      }
    }
  }
}

export const userStateManager = new UserStateManager()

setInterval(() => {
  userStateManager.cleanupOldStates()
}, 5 * 60 * 1000)
