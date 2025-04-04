import {
  IFacebookComment,
  IIntegration
} from '@octobots/ui-inbox/src/settings/integrations/types';

import { ICustomer } from '@octobots/ui-contacts/src/customers/types';
import { ITag } from '@octobots/ui-tags/src/types';
import { IUser } from '@octobots/ui/src/auth/types';
import { QueryResponse } from '@octobots/ui/src/types';

export interface IVideoCallData {
  url: string;
  name?: string;
  status?: string;
  recordingLinks?: string[];
}

export interface ICallHistory {
  customerPhone: string;
  operatorPhone: string;
  callDuration: number;
  callStartTime: Date;
  callEndTime: Date;
  callType: string;
  callStatus: string;
  sessionId: string;
  updatedAt: Date;
  createdAt: Date;
  createdBy: string;
  updatedBy: string;
  recordUrl: string;
}

export interface IConversation {
  _id: string;
  content?: string;
  integrationId: string;
  customerId?: string;
  userId?: string;
  assignedUserId?: string;
  participatedUserIds?: string[];
  readUserIds?: string[];
  createdAt: Date;

  closedAt?: Date;
  closedUserId?: string;

  status?: string;
  messageCount?: number;
  tagIds?: string[];

  // number of total conversations
  number?: number;

  integration: IIntegration;
  customer: ICustomer;
  assignedUser: IUser;
  participatedUsers?: IUser[];
  readUsers: IUser[];
  tags: ITag[];
  updatedAt: Date;
  idleTime: number;
  idleTimeConfig?: number, 
  lastMsgFrom?: string,
  callProAudio?: string;
  videoCallData?: IVideoCallData;
  callHistory?: ICallHistory;

  customFieldsData?: {
    [key: string]: any;
  };
}

interface IEngageDataRules {
  kind: string;
  text: string;
  condition: string;
  value?: string;
}

export interface IEmail {
  name?: string;
  email: string;
}

export interface IMail {
  integrationEmail: string;
  messageId?: string;
  replyTo?: string;
  inReplyTo?: string;
  headerId?: string;
  accountId?: string;
  replyToMessageId?: string;
  from: IEmail[];
  to: IEmail[];
  cc?: IEmail[];
  bcc?: IEmail[];
  reply?: string;
  references?: string;
  threadId?: string;
  subject?: string;
  body?: string;
  attachments?: IMailAttachment[];
}

export interface IMailAttachment {
  id?: string;
  filename?: string;
  content_type?: string;
  mimeType?: string;
  size: number;
  attachmentId: string;
  data?: string;
}

export interface IEngageData {
  messageId: string;
  brandId: string;
  content: string;
  fromUserId: string;
  kind: string;
  sentAs: string;
  rules?: IEngageDataRules[];
}

export interface ICarouselButton {
  type: string;
  title: string;
  text: string;
  payload: string;
  url?: string;
}
export interface ICarouselItem {
  title: string;
  picture?: string;
  file?: string;
  video?: string;
  subtitle?: string;
  footer?: string;
  buttons?: ICarouselButton[];
}

export interface IBotData {
  type: string;
  text?: string;
  title?: string;
  url?: string;
  fromCustomer?: boolean;
  module?: string;
  component: string;
  elements?: ICarouselItem[];
  // template?: ICarouselItem;
  quick_replies?: [
    {
      title: string;
      payload: string;
    }
  ];
  wrapped?: {
    type: string;
    text: string;
    typing: boolean;
  };
}

export interface IMessage {
  content: string;
  videoCallData?: IVideoCallData;
  attachments?: any;
  mentionedUserIds?: string[];
  conversationId: string;
  internal?: boolean;
  fromBot?: boolean;
  contentType?: string;
  customerId?: string;
  userId?: string;
  isCustomerRead?: boolean;
  formWidgetData?: any;
  messengerAppData?: any;
  botData?: any;
  engageData?: IEngageData;
  engageMessageId?: string;
  mailData?: IMail;

  _id: string;
  user?: IUser;
  customer?: ICustomer;
  createdAt: Date;
  updatedAt: Date;
  mid?: string;
  status?: string;
  errorMsg?: string;
  replyForMsgId?: any;
  replyForMsg?: any;
  reaction?: string;
  isForwarded?: boolean;
  hideMsg?: boolean;
}

// mutation types
export type MarkAsReadMutationResponse = {
  markAsReadMutation: (doc: { variables: { _id: string } }) => Promise<any>;
};

export type ReplyMutationResponse = {
  replyMutation: (doc: {
    variables: AddMessageMutationVariables;
  }) => Promise<any>;
};

export type AddMessageMutationVariables = {
  conversationId: string;
  content: string;
  contentType?: string;
  mentionedUserIds?: string[];
  internal?: boolean;
  attachments?: any;
  replyForMsgId?: string;
  template?: string;
};

export type AddMessageMutationResponse = {
  addMessageMutation: (doc: {
    variables: AddMessageMutationVariables;
    optimisticResponse: any;
    update: any;
  }) => Promise<any>;
};

export type UpdateMessageMutationResponse = {
  updateMessageMutation: (doc: {variables: {_id: string, content: any}}) => Promise<any>;
};

export type AssignMutationVariables = {
  conversationIds?: string[];
  assignedUserId: string;
};

export type AssignMutationResponse = {
  assignMutation: (doc: { variables: AssignMutationVariables }) => Promise<any>;
};

export type UnAssignMutationVariables = {
  _ids: string[];
};

export type UnAssignMutationResponse = {
  conversationsUnassign: (doc: {
    variables: UnAssignMutationVariables;
  }) => Promise<any>;
};

export type ChangeStatusMutationVariables = {
  _ids: string[];
  status: boolean;
};

export type ChangeStatusMutationResponse = {
  changeStatusMutation: (doc: {
    variables: ChangeStatusMutationVariables;
  }) => Promise<any>;
};

export type ResolveAllMutationVariables = {
  channelId: string;
  status: string;
  unassigned: string;
  awaitingResponse: string;
  brandId: string;
  tag: string;
  integrationType: string;
  participating: string;
  starred: string;
  startDate: string;
  endDate: string;
};

export type ResolveAllMutationResponse = {
  resolveAllMutation: (doc: {
    variables: ResolveAllMutationVariables;
  }) => Promise<any>;
};

// query types
export type ConvesationsQueryVariables = {
  limit: number;
} & ResolveAllMutationVariables;

export type LastConversationQueryResponse = {
  conversationsGetLast: IConversation;
} & QueryResponse;

export type ConversationsQueryResponse = {
  conversations: IConversation[];
  subscribeToMore: (variables) => void;
  fetchMore?: any;
} & QueryResponse;

export type ConversationDetailQueryResponse = {
  conversationDetail: IConversation;
} & QueryResponse;

export type MessagesQueryResponse = {
  conversationMessages: IMessage[];
  fetchMore: (variables) => void;
} & QueryResponse;

export type MessagesTotalCountQuery = {
  loading: boolean;
  conversationMessagesTotalCount: number;
};

export type ConversationsTotalCountQueryResponse = {
  conversationsTotalCount: number;
} & QueryResponse;

export type UnreadConversationsTotalCountQueryResponse = {
  conversationsTotalUnreadCount: number;
  subscribeToMore: (variables) => void;
} & QueryResponse;

export type FacebookCommentsQueryResponse = {
  facebookGetComments: IFacebookComment[];
  fetchMore: (variables) => void;
} & QueryResponse;

export type EditCustomFieldsMutationVariables = {
  _id: string;
  customFieldsData: any;
};

export type EditMutationResponse = {
  editCustomFields: (params: {
    variables: EditCustomFieldsMutationVariables;
  }) => Promise<any>;
};

export type ResponseTemplatesTotalCountQueryResponse = {
  responseTemplatesTotalCount: number;
} & QueryResponse;

// inbox direct message configs
export type DmQueryItem = {
  query: string;
  name: string;
  integrationKind: string;
};

export type DmConfig = {
  messagesQuery: DmQueryItem;
  countQuery: DmQueryItem;
};
