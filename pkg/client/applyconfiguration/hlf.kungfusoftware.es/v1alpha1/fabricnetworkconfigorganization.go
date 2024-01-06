/*
 * Copyright Kungfusoftware.es. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
// Code generated by applyconfiguration-gen. DO NOT EDIT.

package v1alpha1

// FabricNetworkConfigOrganizationApplyConfiguration represents an declarative configuration of the FabricNetworkConfigOrganization type for use
// with apply.
type FabricNetworkConfigOrganizationApplyConfiguration struct {
	Peers []FabricNetworkConfigOrgPeerApplyConfiguration `json:"peers,omitempty"`
}

// FabricNetworkConfigOrganizationApplyConfiguration constructs an declarative configuration of the FabricNetworkConfigOrganization type for use with
// apply.
func FabricNetworkConfigOrganization() *FabricNetworkConfigOrganizationApplyConfiguration {
	return &FabricNetworkConfigOrganizationApplyConfiguration{}
}

// WithPeers adds the given value to the Peers field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, values provided by each call will be appended to the Peers field.
func (b *FabricNetworkConfigOrganizationApplyConfiguration) WithPeers(values ...*FabricNetworkConfigOrgPeerApplyConfiguration) *FabricNetworkConfigOrganizationApplyConfiguration {
	for i := range values {
		if values[i] == nil {
			panic("nil value passed to WithPeers")
		}
		b.Peers = append(b.Peers, *values[i])
	}
	return b
}
