import { BoxItem, Content, MailSubject, Reply } from "./style";

import Attachments from "./Attachments";
import Button from "@octobots/ui/src/components/Button";
import { IMessage } from "../../../../types";
import MailForm from "@octobots/ui-inbox/src/settings/integrations/containers/mail/MailForm";
import MailHeader from "./MailHeader";
import React from "react";
import Tip from "@octobots/ui/src/components/Tip";
import { cleanHtml } from "../../../../../settings/integrations/containers/utils";

type Props = {
  detailQuery?: any;
  message: IMessage;
  integrationId: string;
  conversationId?: string;
  customerId?: string;
  isLast: boolean;
  mails: IMessage[];
  brandId?: string;
  conversationStatus?: string;
};

type State = {
  isReply: boolean;
  isForward: boolean;
  replyAll: boolean;
  isCollapsed: boolean;
};

class Mail extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isReply: false,
      isForward: false,
      replyAll: false,
      isCollapsed: !props.isLast,
    };
  }

  onToggleContent = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  toggleReply = (_, replyAll: boolean = false, isForward: boolean = false) => {
    this.setState({ isReply: !this.state.isReply, replyAll, isForward });
  };

  closeReply = () => {
    this.setState({ isReply: false, replyAll: false, isForward: false });
  };

  renderButtons(addressLength: number) {
    if (
      this.state.isReply ||
      !this.props.isLast ||
      typeof this.props.message._id !== "string"
    ) {
      return null;
    }

    const toggleReplyAll = (e) => this.toggleReply(e, true);
    const toggleForward = (e) => this.toggleReply(e, false, true);

    return (
      <Reply>
        <Button
          icon="reply"
          size="small"
          onClick={this.toggleReply}
          btnStyle="primary"
        >
          Reply
        </Button>
        {addressLength > 1 && (
          <Button
            icon="reply-all"
            size="small"
            onClick={toggleReplyAll}
            btnStyle="primary"
          >
            Reply to all
          </Button>
        )}
        <Button
          icon="corner-down-right-alt"
          size="small"
          onClick={toggleForward}
          btnStyle="primary"
        >
          Forward
        </Button>
      </Reply>
    );
  }

  renderMailForm(mailData) {
    const { replyAll, isReply, isForward } = this.state;

    if (!isReply) {
      return null;
    }

    const {
      detailQuery,
      conversationId,
      message,
      integrationId,
      customerId,
      brandId,
      mails,
      conversationStatus,
    } = this.props;

    return (
      <BoxItem>
        <MailForm
          detailQuery={detailQuery}
          source="inbox"
          replyAll={replyAll}
          isReply={isReply}
          isForward={isForward}
          closeReply={this.closeReply}
          createdAt={message.createdAt}
          conversationId={conversationId}
          customerId={customerId}
          toggleReply={this.toggleReply}
          integrationId={integrationId}
          refetchQueries={["detailQuery"]}
          conversationStatus={conversationStatus}
          mailData={mailData}
          brandId={brandId}
          mails={mails}
          messageId={message._id}
        />
      </BoxItem>
    );
  }

  renderMailBody(mailData) {
    if (this.state.isCollapsed) {
      return null;
    }

    const innerHTML = { __html: cleanHtml(mailData.body || "") };
    const { to, cc, bcc } = mailData;
    const addresses = to.concat(cc, bcc);

    return (
      <>
        <Content dangerouslySetInnerHTML={innerHTML} />
        {this.renderAttachments(mailData)}
        {this.renderButtons(addresses.length)}
      </>
    );
  }

  renderAttachments(mailData) {
    const { messageId, attachments = [] } = mailData;

    if (!attachments || attachments.length === 0) {
      return;
    }

    const { integrationId } = this.props;

    return (
      <Attachments
        integrationId={integrationId}
        attachments={attachments}
        messageId={encodeURIComponent(messageId)}
      />
    );
  }

  render() {
    const { message = {} as IMessage } = this.props;

    if (!message) {
      return null;
    }

    const { mailData } = message;

    if (!mailData) {
      return null;
    }

    return (
      <>
        <BoxItem $toggle={this.state.isCollapsed}>
          {message.mailData && (
            <Tip text={message.mailData.subject || ""} placement="top-start">
              <MailSubject>
                <div
                  dangerouslySetInnerHTML={{
                    __html: message.mailData.subject || "",
                  }}
                />
              </MailSubject>
            </Tip>
          )}
          <MailHeader
            message={message}
            isContentCollapsed={this.state.isCollapsed}
            onToggleContent={this.onToggleContent}
            onToggleMailForm={this.toggleReply}
          />
          {this.renderMailBody(mailData)}
        </BoxItem>
        {this.renderMailForm(mailData)}
      </>
    );
  }
}

export default Mail;
