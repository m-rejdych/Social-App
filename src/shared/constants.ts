const KEYS = {
  ENTER: 'Enter',
};

const RELATIONSHIP_OPTIONS = [
  { value: 'single', label: 'Single' },
  { value: 'inRelationShip', label: 'In relationship' },
  { value: 'married', label: 'Married' },
  { value: 'divorced', label: 'Divorced' },
] as const;

const NOTIFICATION_TYPES = {
  FRIEND_REQUEST: 'friendRequest',
} as const;

export { KEYS, RELATIONSHIP_OPTIONS, NOTIFICATION_TYPES };
