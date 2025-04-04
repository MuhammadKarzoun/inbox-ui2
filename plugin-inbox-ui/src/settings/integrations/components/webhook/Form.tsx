import { IButtonMutateProps, IFormProps } from "@octobots/ui/src/types";

import Button from "@octobots/ui/src/components/Button";
import ControlLabel from "@octobots/ui/src/components/form/Label";
import { Description } from "@octobots/ui-inbox/src/settings/integrations/styles";
import Form from "@octobots/ui/src/components/form/Form";
import FormControl from "@octobots/ui/src/components/form/Control";
import FormGroup from "@octobots/ui/src/components/form/Group";
import { ModalFooter } from "@octobots/ui/src/styles/main";
import React from "react";
import SelectBrand from "@octobots/ui-inbox/src/settings/integrations/containers/SelectBrand";
import SelectChannels from "@octobots/ui-inbox/src/settings/integrations/containers/SelectChannels";
import { WEBHOOK_DOC_URL } from "../../constants";
import { __ } from "coreui/utils";

type Props = {
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  callback: () => void;
  onChannelChange: () => void;
  channelIds: string[];
};

class Webhook extends React.Component<Props> {
  generateDoc = (values: {
    name: string;
    script: string;
    token: string;
    origin: string;
    brandId: string;
  }) => {
    return {
      name: values.name,
      brandId: values.brandId,
      kind: "webhook",
      data: {
        script: values.script,
        token: values.token,
        origin: values.origin,
      },
    };
  };

  renderContent = (formProps: IFormProps) => {
    const { renderButton, callback, onChannelChange, channelIds } = this.props;
    const { values, isSubmitted } = formProps;

    return (
      <>
        <FormGroup>
          <ControlLabel required={true}>Name</ControlLabel>
          <FormControl
            {...formProps}
            name="name"
            required={true}
            autoFocus={true}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel required={false}>Token</ControlLabel>
          <Description>
            {__(
              "This token will be used to sign the incoming payload, so that octobots can verify that the request came from trusted sources."
            )}
          </Description>
          <FormControl
            {...formProps}
            name="Token (otional)"
            placeholder={__("Will be generated automatically when left blank")}
            required={false}
            autoFocus={false}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel required={false}>Origin</ControlLabel>
          <Description>
            {
              "Enter the IP address of the host that sending request payload, so that octobots can verify that the request came from trusted sources."
            }
          </Description>
          <FormControl
            {...formProps}
            name="origin"
            placeholder="0.0.0.0 (optional)"
            required={false}
            autoFocus={false}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Script</ControlLabel>
          <FormControl {...formProps} name="script" componentclass="textarea" />
        </FormGroup>

        <SelectBrand
          isRequired={true}
          formProps={formProps}
          description={__(
            "Which specific Brand does this integration belong to?"
          )}
        />

        <SelectChannels
          defaultValue={channelIds}
          isRequired={true}
          onChange={onChannelChange}
        />

        <FormGroup>
          <p>
            {"For more information, please review the "}
            <a target="_blank" rel="noopener noreferrer" href={WEBHOOK_DOC_URL}>
              documentaion.
            </a>
          </p>
        </FormGroup>

        <ModalFooter>
          <Button
            btnStyle="simple"
            type="button"
            onClick={callback}
            icon="times-circle"
          >
            Cancel
          </Button>
          {renderButton({
            name: "integration",
            values: this.generateDoc(values),
            isSubmitted,
            callback,
          })}
        </ModalFooter>
      </>
    );
  };

  render() {
    return <Form renderContent={this.renderContent} />;
  }
}

export default Webhook;
