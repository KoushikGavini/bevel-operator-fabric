/*
 * Copyright Kungfusoftware.es. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
// Code generated by applyconfiguration-gen. DO NOT EDIT.

package v1alpha1

// FabricFollowerChannelSpecApplyConfiguration represents an declarative configuration of the FabricFollowerChannelSpec type for use
// with apply.
type FabricFollowerChannelSpecApplyConfiguration struct {
	Name                *string                                               `json:"name,omitempty"`
	MSPID               *string                                               `json:"mspId,omitempty"`
	Orderers            []FabricFollowerChannelOrdererApplyConfiguration      `json:"orderers,omitempty"`
	PeersToJoin         []FabricFollowerChannelPeerApplyConfiguration         `json:"peersToJoin,omitempty"`
	ExternalPeersToJoin []FabricFollowerChannelExternalPeerApplyConfiguration `json:"externalPeersToJoin,omitempty"`
	AnchorPeers         []FabricFollowerChannelAnchorPeerApplyConfiguration   `json:"anchorPeers,omitempty"`
	HLFIdentity         *HLFIdentityApplyConfiguration                        `json:"hlfIdentity,omitempty"`
}

// FabricFollowerChannelSpecApplyConfiguration constructs an declarative configuration of the FabricFollowerChannelSpec type for use with
// apply.
func FabricFollowerChannelSpec() *FabricFollowerChannelSpecApplyConfiguration {
	return &FabricFollowerChannelSpecApplyConfiguration{}
}

// WithName sets the Name field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Name field is set to the value of the last call.
func (b *FabricFollowerChannelSpecApplyConfiguration) WithName(value string) *FabricFollowerChannelSpecApplyConfiguration {
	b.Name = &value
	return b
}

// WithMSPID sets the MSPID field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the MSPID field is set to the value of the last call.
func (b *FabricFollowerChannelSpecApplyConfiguration) WithMSPID(value string) *FabricFollowerChannelSpecApplyConfiguration {
	b.MSPID = &value
	return b
}

// WithOrderers adds the given value to the Orderers field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, values provided by each call will be appended to the Orderers field.
func (b *FabricFollowerChannelSpecApplyConfiguration) WithOrderers(values ...*FabricFollowerChannelOrdererApplyConfiguration) *FabricFollowerChannelSpecApplyConfiguration {
	for i := range values {
		if values[i] == nil {
			panic("nil value passed to WithOrderers")
		}
		b.Orderers = append(b.Orderers, *values[i])
	}
	return b
}

// WithPeersToJoin adds the given value to the PeersToJoin field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, values provided by each call will be appended to the PeersToJoin field.
func (b *FabricFollowerChannelSpecApplyConfiguration) WithPeersToJoin(values ...*FabricFollowerChannelPeerApplyConfiguration) *FabricFollowerChannelSpecApplyConfiguration {
	for i := range values {
		if values[i] == nil {
			panic("nil value passed to WithPeersToJoin")
		}
		b.PeersToJoin = append(b.PeersToJoin, *values[i])
	}
	return b
}

// WithExternalPeersToJoin adds the given value to the ExternalPeersToJoin field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, values provided by each call will be appended to the ExternalPeersToJoin field.
func (b *FabricFollowerChannelSpecApplyConfiguration) WithExternalPeersToJoin(values ...*FabricFollowerChannelExternalPeerApplyConfiguration) *FabricFollowerChannelSpecApplyConfiguration {
	for i := range values {
		if values[i] == nil {
			panic("nil value passed to WithExternalPeersToJoin")
		}
		b.ExternalPeersToJoin = append(b.ExternalPeersToJoin, *values[i])
	}
	return b
}

// WithAnchorPeers adds the given value to the AnchorPeers field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, values provided by each call will be appended to the AnchorPeers field.
func (b *FabricFollowerChannelSpecApplyConfiguration) WithAnchorPeers(values ...*FabricFollowerChannelAnchorPeerApplyConfiguration) *FabricFollowerChannelSpecApplyConfiguration {
	for i := range values {
		if values[i] == nil {
			panic("nil value passed to WithAnchorPeers")
		}
		b.AnchorPeers = append(b.AnchorPeers, *values[i])
	}
	return b
}

// WithHLFIdentity sets the HLFIdentity field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the HLFIdentity field is set to the value of the last call.
func (b *FabricFollowerChannelSpecApplyConfiguration) WithHLFIdentity(value *HLFIdentityApplyConfiguration) *FabricFollowerChannelSpecApplyConfiguration {
	b.HLFIdentity = value
	return b
}
